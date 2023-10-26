import { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { GlobalInfo } from '../../App';
import './style.css';

const UpdateModal = ({ onClose }) => {
  const { data, updateData } = useContext(GlobalInfo);
  const [getData, setData] = useState(data);

  const modalItems = [
    { label: 'rank', name: 'rank' },
    { label: 'percentile', name: 'percentile' },
    { label: 'current score (out of 15)', name: 'correct' },
  ];

  const getScores = (e) => {
    const { name, value } = e.target;

    if (Number(value) || value == '') {
      setData({
        ...getData,
        [name]: Number(value),
      });
    }
  }

  const updateScores = () => {
    const { rank, percentile, correct } = getData;
    if (rank === 0 || percentile === 0 || correct === 0) {
      alert('Input cannot be blank or zero!');
    } else {
      if (getData.percentile > 100) {
        alert('Percentile cannot exceeds the maximum value (100).');
      }
      else if (getData.correct > 15) {
        alert('Correct answers cannot exceeds the given number of questions.');
      }
      else {
        updateData(getData)
        onClose();
      }
    }
  }


  return (
    <div className='update-modal'>
      <div className="modal-container">
        <div className="modal-header">
          <p>Update Scores</p>
          <div className="modal-logo">
            <img src="./assets/html-logo.svg" alt="" />
          </div>
        </div>
        <ul className="modal-items">
          {modalItems.map((item, index) => (
            <li className="modal-item" key={index}>
              <div className="modal-text">
                <p>{index + 1}</p>
                <p><span>Update your </span><span>{item.label}</span></p>
              </div>
              <div className="modal-input">
                <input type='text' name={item.name} value={getData[item.name]} onChange={getScores} />
              </div>
            </li>
          ))}
        </ul>
        <div className="modal-footer">
          <button onClick={onClose} id="cancel-update" >
            Cancel
          </button>
          <button onClick={updateScores} id="save-update">
            <span>Save</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
