import React from 'react';

const cards = [
  { title: 'Total Tickets', value: 12, color: '#3066BE' },
  { title: 'Total Solved', value: 8, color: '#08c414' },
  { title: 'Total Awaiting Approval', value: 2, color: '#c2303d' },
  { title: 'Total in Progress', value: 2, color: '#F5E960' },
];

const cardStyle = {
  flex: '1 1 200px',
  width: '220px',
  height: '250px',
  margin: '16px',
  padding: '20px',
  borderRadius: '16px',
  color: '#002c4c',
  boxShadow: '4px 4px 0px #ccc',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const dashboardContainer = {
  padding: '20px',
  fontFamily: 'Georgia, serif',
};

const sectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px',
};

const bigSection = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '24px',
};

const chartCard = {
  backgroundColor: '#45D5C1',
  borderRadius: '12px',
  height: '250px',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '100px',
  color: '#003366',
};

const teamCard = {
  backgroundColor: '#45D5C1',
  borderRadius: '12px',
  width: '220px',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  margin: '10px 0',
};

const feedbackCard = {
  backgroundColor: '#45D5C1',
  borderRadius: '12px',
  width: '100%',
  padding: '16px',
  marginTop: '10px',
  textAlign: 'center',
  fontSize: '16px',
};

export default function Dashboard() {
  return (
    <div style={dashboardContainer}>
      <h2>Dashboard</h2>

      <div style={sectionStyle}>
        {cards.map((card, idx) => (
          <div key={idx} style={{ ...cardStyle, background: card.color }}>
            <h3 style={{ textAlign: 'center', margin: '0 0 8px' }}>{card.title}</h3>
            <p style={{ fontSize: '4rem', margin: 0 }}>{card.value}</p>
          </div>
        ))}
      </div>

      <div style={bigSection}>
        <div style={{ ...chartCard, marginRight: '16px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/2214/2214523.png" alt="" />
        </div>

        <div style={{ width: '460px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
            <div style={teamCard}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png"
                alt="Support"
                style={{ width: '40px', height: '40px', marginBottom: '6px' }}
              />
              <strong>3</strong>
              <div>Technical Supports</div>
            </div>
            <div style={teamCard}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9321/9321540.png"
                alt="Operation"
                style={{ width: '40px', height: '40px', marginBottom: '6px' }}
              />
              <strong>4</strong>
              <div>Operation Team</div>
            </div>
          </div>

          <div style={feedbackCard}>
            <div><strong>Customer Feedback</strong></div>
            <div style={{ fontSize: '24px', marginTop: '8px', color: '#FFD700' }}>
              ★ ★ ★ ★ ☆
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
