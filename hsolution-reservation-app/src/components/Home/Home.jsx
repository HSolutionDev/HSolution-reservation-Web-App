import {
  faCartPlus,
  faCashRegister,
  faChalkboardTeacher,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Home.scss";
const Home = () => {
  return (
    <div>
      <div className="main">
        {/* <!-- ======================= Cards ================== --> */}
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1,504</div>
              <div className="cardName">Daily Views</div>{" "}
            </div>

            <div className="iconBx">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Sales</div>
            </div>

            <div className="iconBx">
              <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">284</div>
              <div className="cardName">Comments</div>
            </div>

            <div className="iconBx">
              <FontAwesomeIcon className="icon" icon={faChalkboardTeacher} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">7,842</div>
              <div className="cardName">Earning</div>
            </div>

            <div className="iconBx">
              <FontAwesomeIcon className="icon" icon={faCashRegister} />
            </div>
          </div>
        </div>

        {/* <!-- ================ Order Details List ================= --> */}
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" className="btn">
                View All
              </a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Wave femme avec soin (Chx court)</td>
                  <td>1200€</td>
                  <td>Paid</td>
                  <td>
                    <span className="status paid">paid</span>
                  </td>
                </tr>

                <tr>
                  <td>Shampooing brushing (Brushing cheveux longs)</td>
                  <td>110€</td>
                  <td>Due</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    Lissage au Tanin (attention conseillée pour un cheveux
                    européen, ou légèrement ondule) (Cheveux long)
                  </td>
                  <td>1200€</td>
                  <td>Cancel</td>
                  <td>
                    <span className="status cancel">Cancel</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    Forfait Soin Botox à la kératine Bio 100% Naturel (2
                    Shampoing spécifique + application du soin à la kératine
                    mèche par mèche + rinçage + brushing + lissage + coiffage)
                    (Cheveux long)
                  </td>
                  <td>620€</td>
                  <td>Due</td>
                  <td>
                    <span className="status inProgress">In Progress</span>
                  </td>
                </tr>

                <tr>
                  <td>Chignon mariée (avec essai)</td>
                  <td>1200€</td>
                  <td>Paid</td>
                  <td>
                    <span className="status paid">paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- ================= New Customers ================ --> */}
          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customers</h2>
            </div>

            <table>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer02.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Torcy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer01.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>Paris</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer02.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Torcy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer01.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>Paris</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer02.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Torcy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer01.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>Paris</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer01.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    David <br /> <span>Torcy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    {/* <img src="assets/imgs/customer02.jpg" alt="" /> */}
                  </div>
                </td>
                <td>
                  <h4>
                    Amit <br /> <span>Paris</span>
                  </h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
