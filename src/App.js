import "./styles.css";
import City from "./City";
import Date from "./Date";
export default function Form() {
  let weatherData = {
    description: "Cloudy",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dW9BxFRsnGdfnjb9AqZGVBXlrQKKNenzaYqzcrlA2jIuPruDHxxdxB8vbPw-poubl1k&usqp=CAU",
    humidity: "80",
    wind: "4",
    temperature: "15"
  };
  return (
    <div className="container">
      <form>
        <input type="text" name="Enter city" placeholder="Enter city"></input>
        <input type="submit" value="Submit" class="btn btn-success"></input>
      </form>
      <button>Current</button>
      <City />
      <Date />
      <span className="">{weatherData.description}</span>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className=""
          ></img>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>{" "}
            <li>Wind:{weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>
      <div className="Temperature">
        <h2>
          {weatherData.temperature}º <a href="/">C</a>|<a href="/">F</a>
        </h2>
      </div>
    </div>
  );
}

