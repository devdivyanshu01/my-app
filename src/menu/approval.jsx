import React, { useState } from "react";

const TicketApproval = () => {
    const [search, setSearch] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const ticketsData = [
        {
            ticketNumber: "1234",
            subject: "Login issue",
            category: "Access issue",
            priority: "High",
            dateAssigned: "13/08/21",
            assignedTo: "",
        },
        {
            ticketNumber: "1124",
            subject: "New ticket issue",
            category: "Access issue",
            priority: "Medium",
            dateAssigned: "14/08/21",
            assignedTo: "",
        },
        {
            ticketNumber: "1224",
            subject: "New request",
            category: "Feedback",
            priority: "Low",
            dateAssigned: "13/08/21",
            assignedTo: "",
        },
        {
            ticketNumber: "1244",
            subject: "Ticket submission",
            category: "Ticketing",
            priority: "High",
            dateAssigned: "14/08/21",
            assignedTo: "",
        },
        {
            ticketNumber: "1114",
            subject: "Login issue",
            category: "Access issue",
            priority: "High",
            dateAssigned: "3/08/21",
            assignedTo: "",
        },
    ];

    const filteredTickets = ticketsData.filter(
        (ticket) =>
            ticket.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
            ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
            ticket.category.toLowerCase().includes(search.toLowerCase()) ||
            ticket.priority.toLowerCase().includes(search.toLowerCase()) ||
            ticket.assignedTo.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTickets.length / entriesPerPage);
    const startIdx = (currentPage - 1) * entriesPerPage;
    const paginatedTickets = filteredTickets.slice(
        startIdx,
        startIdx + entriesPerPage
    );

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleEntriesChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ margin: "0 0 16px", fontSize: "24px", color: "#333" }}>Ticket Approval</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", alignItems: "center" }}>
                <input
                    type="text"
                    placeholder="Find ticket"
                    value={search}
                    onChange={handleSearchChange}
                    style={{
                        padding: "8px",
                        width: "250px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#f5f5f5",
                        fontSize: "14px",
                    }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{ marginRight: "8px", fontSize: "14px", color: "#333" }}>
                        Show:{" "}
                        <select
                            value={entriesPerPage}
                            onChange={handleEntriesChange}
                            style={{
                                padding: "4px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                background: "#fff",
                                fontSize: "14px",
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>{" "}
                        Entries
                    </label>
                </div>
            </div>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                    color: "#333",
                }}
            >
                <thead>
                    <tr style={{ background: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Ticket No.</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Subject</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Category</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Priority</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Date</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Action</th>
                        <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Assign to</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTickets.map((ticket) => (
                        <tr key={ticket.ticketNumber} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{ticket.ticketNumber}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{ticket.subject}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{ticket.category}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{ticket.priority}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{ticket.dateAssigned}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                <input type="checkbox" defaultChecked /> <span style={{ color: "#888" }}>X</span>
                            </td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                                <select
                                    style={{
                                        padding: "4px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        background: "#fff",
                                        width: "100%",
                                        color: "#888",
                                    }}
                                >
                                    <option value="" disabled>-- Select --</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div
                style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "#666",
                }}
            >
                <span>Showing {startIdx + 1} to {Math.min(startIdx + entriesPerPage, filteredTickets.length)} of {filteredTickets.length} entries</span>
                <div style={{ marginLeft: "16px" }}>
                    <button
                        style={{
                            padding: "4px 8px",
                            margin: "0 4px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            background: "#fff",
                            cursor: "pointer",
                        }}
                        disabled={currentPage === 1}
                        onClick={handlePrevPage}
                    >
                        &lt;&lt;
                    </button>
                    <button
                        style={{
                            padding: "4px 8px",
                            margin: "0 4px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            background: "#fff",
                            cursor: "pointer",
                        }}
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketApproval;
