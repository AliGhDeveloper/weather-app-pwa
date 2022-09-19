

export default function Weather({data, city}) {
    if(!data) return null
    return (
        <div className="row d-flex justify-content-center align-items-center my-3">
                <div className="card mx-auto " style={{ width:'18rem', height: 'fit-content'}} >
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} className="card-img-top " alt="wheater icon" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{data.city}</h5>
                        <p className="card-text">دما : {(data.main.temp - 273).toFixed(2)}</p>
                        <p className="card-text">دمای محسوس: {(data.main.feels_like - 273).toFixed(2)}</p>
                        <p className="card-text">وضعیت هوا : {data.weather[0].description}</p>
                    </div>
                </div>
        </div>
    )
}