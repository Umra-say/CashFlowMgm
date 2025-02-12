from flask import Blueprint, request, jsonify
from database import db, Invoice
from middleware import token_required

invoices_bp = Blueprint('invoices', __name__)

@invoices_bp.route('/invoices', methods=['POST'])
@token_required
def create_invoice(current_user):
    data = request.json
    new_invoice = Invoice(user_id=current_user.id, client_name=data['client_name'], amount=data['amount'], due_date=data['due_date'], status='pending')
    db.session.add(new_invoice)
    db.session.commit()
    return jsonify({'message': 'Invoice created successfully'}), 201

@invoices_bp.route('/invoices/<int:invoice_id>/pay', methods=['PUT'])
@token_required
def mark_invoice_paid(current_user, invoice_id):
    invoice = Invoice.query.filter_by(id=invoice_id, user_id=current_user.id).first()
    if not invoice:
        return jsonify({'message': 'Invoice not found'}), 404
    invoice.status = 'paid'
    db.session.commit()
    return jsonify({'message': 'Invoice marked as paid'})
