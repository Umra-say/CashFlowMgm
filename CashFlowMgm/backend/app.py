from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import DATABASE_URI
from database import db
from routes.auth import auth_bp
# from routes.transactions import transactions_bp
# from routes.invoices import invoices_bp
# from routes.reports import reports_bp

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://127.0.0.1:5500", "http://localhost:5500"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})


app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# db.init_app(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/')
# app.register_blueprint(transactions_bp, url_prefix='/api')
# app.register_blueprint(invoices_bp, url_prefix='/api')
# app.register_blueprint(reports_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
