from flask import Blueprint, jsonify
from database import db, Transaction
from middleware import token_required
import datetime

reports_bp = Blueprint('reports', __name__)

@reports_bp.route('/reports/summary', methods=['GET'])
@token_required
def get_summary(current_user):
    today = datetime.date.today()
    first_day = today.replace(day=1)
    transactions = Transaction.query.filter(Transaction.user_id == current_user.id, Transaction.date >= first_day).all()

    income = sum(t.amount for t in transactions if t.type == 'income')
    expenses = sum(t.amount for t in transactions if t.type == 'expense')
    profit = income - expenses

    return jsonify({'income': income, 'expenses': expenses, 'profit': profit})
