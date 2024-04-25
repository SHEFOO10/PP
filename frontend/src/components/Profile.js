import React, { useEffect, useState } from 'react';
import { getGrades } from '../API.js';

function Profile({ userInfo }) {
  const [natega, setNatega] = useState([]);

  useEffect(() => {
    const fetchNatega = async () => {
      const response = await getGrades();
      if (response.success) {
        setNatega(response.msg);
      }
    };
    fetchNatega();
  }, []);

  return (
    <div className='profile'>
      <div className='student-details-container'>
        <h2>Student Details</h2>
        <div className='flex-row'>
          <div className='student-img female-img'></div>
          <div className='student-details'>
            <h3>{userInfo.first_name} {userInfo.last_name}</h3>
            <div className='flex-row'>
              <div>
                <h4>Role</h4>
                <p>{userInfo.account_type}</p>
              </div>
              <div>
                <h4>Phone Number</h4>
                <p>{userInfo.phone}</p>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='natega-container'>
        <h2>Natega</h2>
        {natega.length ? (
          <div className='natega-grid'>
            {natega.map((item) => (
              <div className='course-container' key={item.id}>
                <div className='flex-row'>
                  <p>{item.enroll_date}</p>
                  <div className='pass'>
                    {item.pass? 'pass' : 'Fail'}
                  </div>
                </div>
                <h3>{item.name}</h3>
                <p>Grade <span className='grade'>{item.grade}</span></p>
              </div>
            ))}
          </div>
        ) : (
          'There are no finished courses yet'
        )}
      </div>
    </div>
  );
}

export default Profile;