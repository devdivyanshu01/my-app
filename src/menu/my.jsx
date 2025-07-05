import React, { useState } from "react";
import Details from './My-ticket/detail';

const ticketsData = [
  { number: "1234", subject: "Login issue", status: "In Progress", supportBy: "Tech support", date: "13/08/21", rate: 0, },
  {number: "1124", subject: "New ticket issue", status: "On hold", supportBy: "Operation Team", date: "14/08/21", rate: 1,  },
  { number: "1224", subject: "New request", status: "Closed", supportBy: "Tech support", date: "13/08/21", rate: 4, },
  { number: "1244", subject: "Ticket submission", status: "In Progress", supportBy: "Operation Team", date: "14/08/21", rate: 1, },
  { number: "1114", subject: "Login issue", status: "In Progress", supportBy: "Tech support", date: "3/08/21", rate: 1,},
];


const thStyle = {
  padding: "10px",
  borderBottom: "1px solid #ccc",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: "#f0f0f0",
  cursor: "pointer",
};

const getStatusStyle = (status) => {
  let backgroundColor = "#ccc";
  let color = "#fff";

  switch (status.toLowerCase()) {
    case "in progress":
      backgroundColor = "#48D597";
      color = "#004600";
      break;
    case "on hold":
      backgroundColor = "#002D52";
      color = "#fff";
      break;
    case "closed":
      backgroundColor = "#5a5a5a";
      break;
    case "open":
      backgroundColor = "#2F80ED";
      break;
    case "pending":
      backgroundColor = "#f39c12";
      break;
  }

  return {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "12px",
    backgroundColor,
    color,
    fontSize: "13px",
    fontWeight: "bold",
    textAlign: "center",
    minWidth: "80px",
  };
};

const PAGE_SIZE = 5;

function StarRating({ rate }) {
    return (
        <span>
            {Array.from({ length: 5 }, (_, i) =>
                i < rate ? "★" : "☆"
            ).join("")}
        </span>
    );
}

export default function My() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);



    const filteredTickets = ticketsData.filter(
        (t) =>
            t.number.toLowerCase().includes(search.toLowerCase()) ||
            t.subject.toLowerCase().includes(search.toLowerCase()) ||
            t.status.toLowerCase().includes(search.toLowerCase()) ||
            t.supportBy.toLowerCase().includes(search.toLowerCase())
    );

    const totalEntries = filteredTickets.length;
    const totalPages = Math.ceil(totalEntries / PAGE_SIZE);
    const pagedTickets = filteredTickets.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
  <div style={{ maxWidth: 1000, margin: "auto", padding: 24, fontFamily: "sans-serif", }} >
    <h2 style={{ textAlign: "center", marginBottom: 24 }}>List of Ticket</h2>

    
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
      <div style={{  marginRight: 24 }}>
        <input type="text" placeholder="Find ticket" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} style={{ padding: "8px 36px 8px 12px", borderRadius: "8px", border: "1px solid #ccc", width: 200,fontSize: "14px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)", }} />
      </div>

      <label>
        Show:{" "}
        <select style={{ padding: "4px 8px", borderRadius: "6px", border: "1px solid #aaa", marginLeft: 4, }} >
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>{" "}
        Entries
      </label>
    </div>

    <div style={{ marginBottom: 8 }}>
      Showing {pagedTickets.length} of {totalEntries} entries
    </div>

    <table width="100%" style={{ borderCollapse: "collapse", width: "100%", boxShadow: "0px 0px 6px rgba(0,0,0,0.1)", }}>
      <thead>
        <tr style={{ backgroundColor: "#eee", textAlign: "left" }}>
          <th style={thStyle}>Ticket No.</th>
          <th style={thStyle}>Subject</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Support by</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Rate</th>
        </tr>
      </thead>
      <tbody>
        {pagedTickets.length === 0 ? (
          <tr>
            <td colSpan={6} align="center">
              No tickets found.
            </td>
          </tr>
        ) : (
          pagedTickets.map((t, idx) => (
            <tr key={t.number} style={{ backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#fff", }} >
              <td style={tdStyle}>
                <a href="#" style={{ color: "#0645AD", textDecoration: "underline" }} onClick={(e) => {
    e.preventDefault(); // prevent reload
    setSelectedTicket(t);
    setShowDetails(true);
  }}>
                  {t.number}
                </a>
                {showDetails && selectedTicket && (
  <Details
    open={true}
    onClose={() => setShowDetails(false)}
    ticket={{
      ticketNumber: selectedTicket.number,
      date: selectedTicket.date,
      name: "John Doe",
      department: "Support",
      title: selectedTicket.subject,
      description: "Auto-filled description...",
      category: "Bug",
      type: "Technical",
      priority: "High",
      status: selectedTicket.status,
      attachment: null,
    }}
  />
)}

              </td>
              <td style={tdStyle}>{t.subject}</td>
              <td style={tdStyle}>
                <span style={getStatusStyle(t.status)}>{t.status}</span>
              </td>
              <td style={tdStyle}>{t.supportBy}</td>
              <td style={tdStyle}>{t.date}</td>
              <td style={tdStyle}>
                <span style={{ color: "#f5c518", fontSize: "16px" }}>
                  {Array.from({ length: 5 }, (_, i) => (i < t.rate ? "★" : "☆")).join("")}
                </span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>

    <div style={{ marginTop: 16, textAlign: "right" }}>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} style={buttonStyle} >≪ Prev</button>
      <span style={{ margin: "0 8px" }}>
        Page {page} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} style={buttonStyle} >Next ≫</button>
    </div>
    {/* <Details open={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} ticket={selectedTicket} /> */}
  </div>

    );
}