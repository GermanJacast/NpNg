import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "../../style/schedule/schedule.css";

export const Schedule = () => {
  const [stateMonday, changeStateMonday] = useState(true);
  const [stateTuesday, changeStateTuesday] = useState(true);
  const [stateWednesday, changeStateWednesday] = useState(true);
  const [stateThursday, changeStateThursday] = useState(true);
  const [stateFriday, changeStateFriday] = useState(true);
  const [stateSaturday, changeStateSaturday] = useState(true);
  return (
    <div className="container-schedule">
      <h2>
        Nuestras<span> clases</span>
      </h2>
      <div className="container-days">
        <div className="days">
          <div onClick={() => changeStateMonday(!stateMonday)}>
            <h3>Lunes</h3>
            <BiDownArrow
              className={`arrow ${stateMonday ? "rotate-arrow" : ""}`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateMonday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch">
              <p>Clase A</p>
              <span>8:00 - 9:00</span>
            </div>
            <div className="content-sch">
              <p>Clase B</p>
              <span>9:00 - 10:00</span>
            </div>
            <div className="content-sch">
              <p>Clase C</p>
              <span>9:30 - 10:30</span>
            </div>
            <div className="content-sch">
              <p>Clase D</p>
              <span>11:00 - 12:00</span>
            </div>
            <div className="content-sch">
              <p>Clase E</p>
              <span>15:00 - 16:00</span>
            </div>
            <div className="content-sch">
              <p>Clase F</p>
              <span>15:30 - 16:30</span>
            </div>
            <div className="content-sch">
              <p>Clase G</p>
              <span>19:00 - 20:00</span>
            </div>
          </div>
        </div>
        <div className="days">
          <div onClick={() => changeStateTuesday(!stateTuesday)}>
            <h3>Martes</h3>
            <BiDownArrow
              className={`arrow ${
                stateTuesday ? "rotate-arrow" : ""
              }`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateTuesday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch">
              <p>Clase A</p>
              <span>8:00 - 9:00</span>
            </div>
            <div className="content-sch">
              <p>Clase B</p>
              <span>9:00 - 10:00</span>
            </div>
            <div className="content-sch">
              <p>Clase C</p>
              <span>9:30 - 10:30</span>
            </div>
            <div className="content-sch">
              <p>Clase D</p>
              <span>11:00 - 12:00</span>
            </div>
            <div className="content-sch">
              <p>Clase E</p>
              <span>15:00 - 16:00</span>
            </div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
          </div>
        </div>
        <div className="days">
          <div onClick={() => changeStateWednesday(!stateWednesday)}>
            <h3>Miércoles</h3>
            <BiDownArrow
              className={`arrow ${
                stateWednesday ? "rotate-arrow" : ""
              }`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateWednesday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch">
              <p>Clase A</p>
              <span>8:00 - 9:00</span>
            </div>
            <div className="content-sch">
              <p>Clase B</p>
              <span>9:00 - 10:00</span>
            </div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch">
              <p>Clase F</p>
              <span>15:30 - 16:30</span>
            </div>
            <div className="content-sch">
              <p>Clase G</p>
              <span>19:00 - 20:00</span>
            </div>
          </div>
        </div>
        <div className="days">
          <div onClick={() => changeStateThursday(!stateThursday)}>
            <h3>Jueves</h3>
            <BiDownArrow
              className={`arrow ${
                stateThursday ? "rotate-arrow" : ""
              }`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateThursday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch">
              <p>Clase C</p>
              <span>9:30 - 10:30</span>
            </div>
            <div className="content-sch">
              <p>Clase D</p>
              <span>11:00 - 12:00</span>
            </div>
            <div className="content-sch"></div>
            <div className="content-sch">
              <p>Clase F</p>
              <span>15:30 - 16:30</span>
            </div>
            <div className="content-sch"></div>
          </div>
        </div>
        <div className="days">
          <div onClick={() => changeStateFriday(!stateFriday)}>
            <h3>Viernes</h3>
            <BiDownArrow
              className={`arrow ${stateFriday ? "rotate-arrow" : ""}`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateFriday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch">
              <p>Clase C</p>
              <span>9:30 - 10:30</span>
            </div>
            <div className="content-sch">
              <p>Clase D</p>
              <span>11:00 - 12:00</span>
            </div>
            <div className="content-sch">
              <p>Clase E</p>
              <span>15:00 - 16:00</span>
            </div>
            <div className="content-sch">
              <p>Clase F</p>
              <span>15:30 - 16:30</span>
            </div>
            <div className="content-sch">
              <p>Clase G</p>
              <span>19:00 - 20:00</span>
            </div>
          </div>
        </div>
        <div className="days">
          <div onClick={() => changeStateSaturday(!stateSaturday)}>
            <h3>Sabado</h3>
            <BiDownArrow
              className={`arrow ${
                stateSaturday ? "rotate-arrow" : ""
              }`.trimEnd()}
            />
          </div>
          <div className={`sch ${stateSaturday ? "none-day" : ""}`.trimEnd()}>
            <div className="content-sch">
              <p>Clase A</p>
              <span>8:00 - 9:00</span>
            </div>
            <div className="content-sch">
              <p>Clase B</p>
              <span>9:00 - 10:00</span>
            </div>
            <div className="content-sch">
              <p>Clase C</p>
              <span>9:30 - 10:30</span>
            </div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
            <div className="content-sch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
