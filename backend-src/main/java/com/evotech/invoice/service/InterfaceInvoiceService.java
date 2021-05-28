package com.evotech.invoice.service;

import java.util.List;
import java.util.Optional;

import com.evotech.invoice.dta.Invoice;

public interface InterfaceInvoiceService {

	List<Invoice> getAllInvoices();

	void addInvoice(Invoice invoice);

	void updateInvoice(Invoice invoice, int id);

	void deleteInvoice(int id);

	void getInvoiceByOwner(String ownerName);

	Optional<Invoice> getInvoiceById(int id);

}
