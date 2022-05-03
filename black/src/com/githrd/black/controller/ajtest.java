package com.githrd.black.controller;

import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/idCheck.pk")
public class ajtest extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse resp) {
		ArrayList<String> list = new ArrayList<String>();
		list.add("jennie");
		list.add("lisa");
		list.add("roes");
		list.add("jisoo");
		list.add("euns");
		
		String sid = req.getParameter("id");
		boolean bool = list.contains(sid);
		
		PrintWriter pw = null;
		try {
			pw = resp.getWriter();
			pw.println("{");
			if(bool) {
				pw.println("\"result\": \"NO\"");
			} else {
				pw.println("\"result\": \"OK\"");
			}
			pw.println("}");
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
}
