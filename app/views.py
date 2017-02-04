from flask import render_template, request, jsonify, json
from flask import redirect, url_for, g, flash, session
from flask_login import current_user, login_user, logout_user
from flask_login import *
from app import app, models, login_manager
from .forms import LoginForm
from playhouse.shortcuts import model_to_dict
from werkzeug import secure_filename
from peewee import JOIN
import os

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
