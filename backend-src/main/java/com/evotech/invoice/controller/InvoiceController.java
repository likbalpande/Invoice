package com.evotech.invoice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.evotech.invoice.dta.Invoice;
import com.evotech.invoice.service.InterfaceInvoiceService;

@RestController
public class InvoiceController {

	@Autowired
	InterfaceInvoiceService invServiceRef;
	
	@RequestMapping("/welcome")
	public String welcomeInvoice() {
		return "Welcome to the Invoice Page";
	}
	
	@RequestMapping("/invoices")
	public List<Invoice> getAllInvoices() {
		return invServiceRef.getAllInvoices();
	}
	
	@RequestMapping("/invoices/{id}")
	public Optional<Invoice> getInvoiceById(@PathVariable int id) {
		return invServiceRef.getInvoiceById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/invoices")
	public void addInvoice(@RequestBody Invoice invoice) {
		invServiceRef.addInvoice(invoice);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/invoices/{id}")
	public void updateInvoice(@RequestBody Invoice invoice, @PathVariable int id) {
		invServiceRef.updateInvoice(invoice, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/invoices/{id}")
	public void deleteInvoice(@PathVariable int id) {
		invServiceRef.deleteInvoice(id);
	}
	
	@RequestMapping("/employees/owners/{ownerName}")
	public void getInvoiceByOwner(@PathVariable String ownerName) {
		invServiceRef.getInvoiceByOwner(ownerName);
	}
	
}
