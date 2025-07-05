import React from "react";

const user = {
    photo: "https://cdn-icons-png.flaticon.com/128/892/892781.png",
    name: "Operation Name",
    contact: "Contact No: 0123456789",
    department: "Department: ABC",
    stats: {
        total: 5,
        solved: 2,
        pending: 1,
        inProgress: 2,
        rating: 4.5,
    },
};

const operations = [
    {
        id: 1,
        photo: "https://cdn-icons-png.flaticon.com/128/892/892781.png",
        name: "Operation Name 1",
    },
    {
        id: 2,
        photo: "https://cdn-icons-png.flaticon.com/128/892/892781.png",
        name: "Operation Name 2",
    },
    {
        id: 3,
        photo: "https://cdn-icons-png.flaticon.com/128/892/892781.png",
        name: "Operation Name 3",
    },
];

const Performance = () => (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "24px", fontFamily: "Arial, sans-serif", background: "#fff" }}>
        <h2 style={{ margin: "0 0 24px", color: "#333", padding: "8px", borderRadius: "4px", fontSize: "24px" }}>Performance</h2>
        <div style={{ display: "flex", marginBottom: "24px", gap: "24px" }}>
            <div style={{ background: "#e8e8e8", padding: "16px", border: "1px solid #ddd", borderRadius: "8px", width: "300px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)" }}>
                <img
                    src={user.photo}
                    alt="Profile"
                    style={{ width: "90px", height: "90px", borderRadius: "50%", marginBottom: "16px", display: "block", marginLeft: "auto", marginRight: "auto" }}
                />
                <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#333", textAlign: "center" }}>{user.name}</h3>
                <div style={{ color: "#666", fontSize: "14px", marginBottom: "4px", textAlign: "center" }}>{user.contact}</div>
                <div style={{ color: "#666", fontSize: "14px", textAlign: "center" }}>{user.department}</div>
            </div>
            <div style={{ background: "#e8e8e8", padding: "16px", border: "1px solid #ddd", borderRadius: "8px", flex: 1, boxShadow: "2px 2px 5px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ color: "#333", fontSize: "14px", textAlign: "left" }}>
                        <strong>Total Ticket Handle:</strong><br />
                        <span style={{ fontSize: "18px", color: "#000" }}>{user.stats.total}</span>
                    </div>
                    <div style={{ color: "#333", fontSize: "14px", textAlign: "left" }}>
                        <strong>Ticket Solved:</strong><br />
                        <span style={{ fontSize: "18px", color: "#000" }}>{user.stats.solved}</span>
                    </div>
                    <div style={{ color: "#333", fontSize: "14px", textAlign: "left" }}>
                        <strong>Ticket Pending:</strong><br />
                        <span style={{ fontSize: "18px", color: "#000" }}>{user.stats.pending}</span>
                    </div>
                    <div style={{ color: "#333", fontSize: "14px", textAlign: "left" }}>
                        <strong>Ticket in progress:</strong><br />
                        <span style={{ fontSize: "18px", color: "#000" }}>{user.stats.inProgress}</span>
                    </div>
                    <div style={{ color: "#333", fontSize: "14px", textAlign: "left" }}>
                        <strong>Rating:</strong><br />
                        <span style={{ fontSize: "18px", color: "#000" }}>
                            {user.stats.rating} <span style={{ color: "#ffd700" }}>★</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <h4 style={{ margin: "0 0 16px", color: "#333", fontSize: "18px" }}>Operations</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {operations.map((op) => (
                <div key={op.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#e8e8e8", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)", width: "300px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={op.photo}
                            alt={op.name}
                            style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "16px" }}
                        />
                        <div style={{ color: "#333", fontSize: "16px" }}>{op.name}</div>
                    </div>
                    <button
                        style={{ backgroundColor: "#2AF5FF", border: "none", padding: "6px 16px", fontSize: "14px", borderRadius: "4px", cursor: "pointer", color: "#fff" }}
                    >
                        View details
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default Performance;