var express = require('express');
import User from '../models/User'
User.find()

var app = express();

// Export express app
export default {
  path: '/api',
  handler: app
}
