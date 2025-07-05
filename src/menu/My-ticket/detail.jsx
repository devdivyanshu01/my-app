import React from "react";

const ticket = {
  ticketNumber: "1234",
  date: "13/08/21",
  name: "John Doe",
  department: "Tech",
  title: "Login error",
  description: "User cannot log in",
  category: "Bug",
  type: "Issue",
  priority: "High",
  status: "Open",
  attachment: null
};


const Details = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.heading}>Ticket Details</h2>
        <div style={styles.details}>
          <DetailRow label="Ticket No:" value={ticket.ticketNumber} />
          <DetailRow label="Date:" value={ticket.date} />
          <DetailRow label="Name:" value={ticket.name} />
          <DetailRow label="Dept:" value={ticket.department} />

          <div style={styles.divider} />

          <DetailRow label="Title:" value={ticket.title} />
          <DetailRow label="Description:" value={ticket.description} />
          <DetailRow label="Category:" value={ticket.category} />
          <DetailRow label="Type:" value={ticket.type} />
          <DetailRow label="Priority:" value={ticket.priority} />
          <DetailRow label="Status:" value={ticket.status} />

          <div>
            <strong>Attachment:</strong>{" "}
            {ticket.attachment ? (
              <a
                href={ticket.attachment}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Attachment
              </a>
            ) : (
              "None"
            )}
          </div>
        </div>
        <div style={styles.buttonWrapper}>
          <button style={{padding: "10px 20px",background: "#6a58c4",color: "#fff",border: "none",borderRadius: "6px",fontWeight: "bold",fontSize: "16px",cursor: "pointer",minWidth: "100px",margin:'0 auto'}}>Update</button>
          <button style={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div style={{ marginBottom: 4 }}>
    <strong>{label}</strong> {value || "-"}
  </div>
);

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.07)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#ffffff",
    padding: "30px",
    width: "500px",
    maxWidth: "95vw",
    fontFamily: "Georgia, serif",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20px",
    fontSize: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "15px",
  },
  divider: {
    height: "10px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  closeBtn: {
    padding: "10px 20px",
    background: "#3ED43E",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    minWidth: "100px",
    margin:'0 auto'
  },
};

export default Details;
