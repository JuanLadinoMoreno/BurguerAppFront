

function BannerSells({totalSales, monthsSales,allSales}) {

    
    return (
        <>
            <div className="d-flex justify-content-around align-items-center flex-wrap gap-4 mt-5">
                <div className="card border-warning-subtle" >
                    <div className="card-body d-flex justify-content-around align-items-center">
                        <i className="fa-solid fa-tags fs-5 text-success text-opacity-75 border border-success border-3 rounded-circle p-2"></i>
                        <div className="m-2">
                            <h3 className="card-title">{allSales.length == 0 ? 0 : allSales.length}</h3>
                            <h6 className="card-subtitle m-2 text-body-secondary">Total Ventas</h6>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="card border-warning-subtle" >
                    <div className="card-body d-flex justify-content-around align-items-center">
                        <i className="fa-solid fa-calendar-days fs-5 text-success text-opacity-75 border border-success border-3 rounded-circle p-2"></i>
                        <div className="m-2">
                            <h3 className="card-title">${monthsSales}</h3>
                            <h6 className="card-subtitle m-2 text-body-secondary">Total Mes</h6>
                        </div>
                    </div>
                </div>

                <div className="card border-warning-subtle" >
                    <div className="card-body d-flex justify-content-around align-items-center">
                        <i className="fa-solid fa-dollar-sign fs-5 text-success text-opacity-75 border border-success border-3 rounded-circle p-2"></i>
                        <div className="m-2">
                            <h3 className="card-title">${totalSales}</h3>
                            <h6 className="card-subtitle m-2 text-body-secondary">Total Ventas</h6>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BannerSells