# from flask import Blueprint, request, jsonify
# from database import db, Transaction
# from middleware import token_required

# transactions_bp = Blueprint('transactions', __name__)

# @transactions_bp.route('/transactions', methods=['POST'])
# @token_required
# def add_transaction(current_user):
#     data = request.json
#     new_transaction = Transaction(user_id=current_user.id, amount=data['amount'], type=data['type'], category=data['category'], description=data.get('description'))
#     db.session.add(new_transaction)
#     db.session.commit()
#     return jsonify({'message': 'Transaction added successfully'}), 201

# @transactions_bp.route('/transactions', methods=['GET'])
# @token_required
# def get_transactions(current_user):
#     transactions = Transaction.query.filter_by(user_id=current_user.id).all()
#     return jsonify([t.to_dict() for t in transactions])
