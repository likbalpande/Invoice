package com.evotech.invoice.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evotech.invoice.dao.InterfaceInvoiceDAO;
import com.evotech.invoice.dta.Invoice;

@Service
public class InvoiceServiceImpl implements InterfaceInvoiceService{

	// Using lists and arrays
	/*
	Date date1 = new Date(2021, 1, 26, 10, 30);
	Date date2 = new Date(2021, 2, 14, 9, 45);
	Date date3 = new Date(2021, 3, 8, 13, 00);
	Date date4 = new Date(2021, 4, 30, 20, 15);
	Date date5 = new Date(2021, 5, 20, 16, 30);
	
	List<Invoice> invList = new ArrayList<> (Arrays.asList(
			new Invoice("Property1",date1,"Owner1",101,14500,"Description1"),
			new Invoice("Property2",date2,"Owner2",102,5000,"Description2"),
			new Invoice("Property3",date3,"Owner3",103,10000,"Description3"),
			new Invoice("Property4",date4,"Owner4",104,7500,"Description4"),
			new Invoice("Property5",date5,"Owner5",105,25000,"Description5")
			));
	*/
	@Autowired
	private InterfaceInvoiceDAO daoRef;
	
	@Override
	public List<Invoice> getAllInvoices() {
		//return invList;
		return (List<Invoice>) daoRef.findAll();
	}

	@Override
	public Optional<Invoice> getInvoiceById(int id) {
		//return invList.stream().filter(e -> e.getInvoiceNumber() == invId).findFirst().get();
		return daoRef.findById(id);
	}


	@Override
	public void addInvoice(Invoice invoice) {
		//invList.add(invoice);
		daoRef.save(invoice);
	}

	@Override
	public void updateInvoice(Invoice invoice, int id) {
		/*for(int i=0; i<invList.size(); i++) {
			Invoice e = invList.get(i);
			if(e.getInvoiceNumber()==invId) {
				invList.set(i, invoice);
				return;
			}
		}*/
		daoRef.save(invoice);
	}

	@Override
	public void deleteInvoice(int id) {
		//invList.removeIf(e -> e.getInvoiceNumber() == invId);
		daoRef.deleteById(id);
	}

	@Override
	public void getInvoiceByOwner(String ownerName) {
		// TODO Auto-generated method stub
		
	}

	
}
