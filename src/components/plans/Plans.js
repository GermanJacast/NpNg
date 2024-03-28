import "../../style/plans/plans.css";

const Plans = () => {
  return (
    <div className="container-plans">
      <h2>
        Planes <span> pensados para ti</span>
      </h2>
      <div className="plans">
        <div className="content-plan">
          <div className="title">
            <h3>Plan 1</h3>
          </div>
          <div className="price">
            <h4>$ X00.000</h4>
            <span>X Meses</span>
          </div>
          <div className="description">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li className="no">Lorem ipsum</li>
              <li className="no">Lorem ipsum</li>
              <li className="no">Lorem ipsum</li>
            </ul>
          </div>
          <div className="button">
            <button>¡Comencemos!</button>
          </div>
        </div>
        <div className="content-plan">
          <div className="title">
            <h3>Plan 2</h3>
          </div>
          <div className="price">
            <h4>$ X00.000</h4>
            <span>X Meses</span>
          </div>
          <div className="description">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li className="no">Lorem ipsum</li>
            </ul>
          </div>
          <div className="button">
            <button>¡Comencemos!</button>
          </div>
        </div>
        <div className="content-plan">
          <div className="title">
            <h3>Plan 3</h3>
          </div>
          <div className="price">
            <h4>$ X00.000</h4>
            <span>X Meses</span>
          </div>
          <div className="description">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="button">
            <button>¡Comencemos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
