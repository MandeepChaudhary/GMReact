import "./App.css";
import GaramossalaSVG from "./components/GaramossalaSVG";
import IconWhatsapp from "./components/IconWhatsapp";
import Gpin from "./assets/googlepin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Menu1 from "./assets/menu1.jpeg";
import Menu2 from "./assets/menu2.jpeg";
import waIcon from "./assets/WhatsApp_icon.png";
import caIcon from "./assets/call.png";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onWaClick = () => {
    window.location.href = "https://wa.me/447985252422";
  };

  const onPhClick = () => {
    window.location.href = "tel:01303891770";
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = [
    "5pm - 10pm",
    "5pm - 10pm",
    "5pm - 10pm",
    "5pm - 10pm",
    "5pm - 10pm",
    "5pm - 10pm",
    "Closed",
  ];
  const address = "105 Canterbury Rd, Folkestone CT19 5NW, United Kingdom.";
  const call = "Contact : 01303891770 / 01303894030";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <>
      <div className="container-md">
        <GaramossalaSVG></GaramossalaSVG>
        <div className="row  justify-content-center my-4">
          <div className="address-wrapper shadowed-background">
            <p>
              Address:{" "}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                {address}
                <img src={Gpin} className="gImg" alt="" />
              </a>
            </p>
          </div>
        </div>

        <div className="row  justify-content-center my-4">
          <button
            type="button"
            className="btn btn-success custom"
            onClick={handleShow}
          >
            Menu
          </button>
        </div>
        <div className="row shadowed-background justify-content-center my-4">
          <div className="container address-wrapper">{call}</div>
          <img src={waIcon} onClick={onWaClick} className="waImg" alt="" />
          <img src={caIcon} onClick={onPhClick} className="waImg" alt="" />
        </div>

        <div className="row shadowed-background justify-content-center">
          Opening Timings
          <table className="table text-center">
            <tbody>
              {days.map((day, index) => (
                <tr key={day}>
                  <td className="noborder">{day}</td>
                  <td className="noborder">{times[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={Menu1} className="img-fluid" alt="Menu" />
            <img src={Menu2} className="img-fluid" alt="Menu" />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default App;
