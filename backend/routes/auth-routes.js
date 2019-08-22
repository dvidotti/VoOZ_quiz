const express = require('express');

const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const MyVoice = require('../models/my-voice');


authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('caiu no true do loggedin', req.user)
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong authenticating MyVoice' });
      return;
    }

    if (!user) {
      res.status(401).json({message: 'Usuário e/ou senha incorretos'});
      return;
    }      

    req.login(user, (err) => {  
      if (err) {
          res.status(500).json({ message: 'Session save went bad.' });
          return;
      }
        res.status(200).json(user);
    }); 
  })
  (req, res, next);
});



authRoutes.post('/signup', (req, res, next) => {
  const { level, range, intensity, air, style, record, artist, wishes, email, name, username, password } = req.body;
  

  if (!username || !password) {
    res.status(400).json({ message: 'Preencha o usuário e senha' });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({ message: 'Crie uma senha com no mínimo 8 characteres.' });
    return;
  }

  MyVoice.findOne({ username }, (err, foundMyVoice) => {
    if (err) {
      res.status(500).json({ message: 'Username check went bad.' });
      return;
    }

    if (foundMyVoice) {
      res.status(400).json({ message: 'Usuário já cadastrado, escolha outro nome.' });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewVoice = new MyVoice({
      username,
      password: hashPass,
      email,
      level,
      range,
      intensity,
      record,
      air,
      style,
      artist,
      wishes,
      name,
    });

    aNewVoice.save((err) => {
      if (err) {
        res.status(400).json({ message: 'Clique no link do VoOZ abaixo e faça o teste para se cadastrar ;-).' });
        return;
      }
      
      req.login(aNewVoice, (err) => {
        if (err) {
          res.status(500).json({ message: 'Login after signup went bad.' });
          return;
        }
      })
      res.status(200).json(aNewVoice);
    });
  });
});

module.exports = authRoutes;
