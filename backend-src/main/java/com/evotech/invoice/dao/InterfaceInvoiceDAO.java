package com.evotech.invoice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.evotech.invoice.dta.Invoice;

@Repository
public interface InterfaceInvoiceDAO extends JpaRepository<Invoice, Integer>{
	
}
