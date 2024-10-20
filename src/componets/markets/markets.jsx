import ActiveMarket from "./activemarkets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMarket from "./useMarkets";

const Markets = () => {
    const {
        kpisData,
        filteredEvent,
        categoriesList,
        categoryName,
        handleCategory,
        isLoading
    } = useMarket();


    return (
        <div style={{ width: "100%", minHeight: "100vh", marginBottom: "2rem" }}>
            <ToastContainer />
            <div style={{ width: "100%", minHeight: "95vh", display: "flex" }}>
                <div className="marketContainer" style={{ minHeight: "95vh" }}>
                    <div
                        className="marketSubNav"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '40px',
                            // background: "linear-gradient(90.06deg, #FFD700 0%, #8B4513 100%)",
                            // background:"linear-gradient(270deg, rgba(247, 147, 26, 0.4) 0%, rgba(45, 40, 255, 0.4) 100%)",
                            // backgroundColor:"white",
                            background: 'white',
                            gap: "2.5rem",
                            marginTop: "5rem",
                            boxShadow: "rgba(0, 0, 0, 0.35) 5px 2px 5px"
                        }}
                    >
                        <p  className="subNavbarItem"
                            onClick={() => handleCategory("All")}
                            style={{
                                fontWeight: categoryName === "All" ? "700" : "500",
                                cursor: "pointer"
                            }}
                        >All</p>
                        {
                            categoriesList && categoriesList.map((category) => (
                                <p key={category.name} onClick={() => handleCategory(category.name)}
                                    className="subNavbarItem"
                                    style={{
                                        fontWeight: categoryName === category.name ? "700" : "500",
                                        cursor: "pointer",
                                        marginRight:"2.5rem"
                                    }}
                                >{category.name}</p>
                            ))
                        }
                    </div>

                    <div className="tokenInfoContainer" style={{ gap: "2rem", marginTop: "5rem" }}>
                        <div className="valueContainer" style={valueContainerStyles}>
                            <div style={valueHeaderStyles}>
                                <h3>Total Value Locked</h3>
                                <img src="lock.svg" alt="lock icon" style={iconStyles} />
                            </div>
                            <div>
                                <h1>${kpisData.total_volume_locked}</h1>
                            </div>
                        </div>
                        <div className="valueContainer" style={valueContainerStyles}>
                            <div style={valueHeaderStyles}>
                                <h3>Total Fees Generated</h3>
                                <img src="cash.svg" alt="cash icon" style={iconStyles} />
                            </div>
                            <div>
                                <h1>${kpisData.total_platform_fee}</h1>
                            </div>
                        </div>
                        {/* <div className="valueContainer" style={valueContainerStyles}>
                            <div style={valueHeaderStyles}>
                                <h3>Total Tokens Burnt</h3>
                                <img src="fire.svg" alt="fire icon" style={iconStyles} />
                            </div>
                            <div>
                                <h1>{0}</h1>
                            </div>
                        </div> */}
                    </div>

                    <ActiveMarket
                        event={filteredEvent}
                        title={"Active"}
                        marketCategory={categoryName}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

const valueContainerStyles = {
    height: "120px",
    background: "linear-gradient(180deg, rgba(247, 147, 26, 0.2) 0%, rgba(45, 40, 255, 0.2) 100%)",
    borderRadius: "5px",
    padding: "1rem",
    border: "1px solid white",
    color: "black",
    boxShadow: "2px 3px 12px 0px rgba(0, 0, 0, 0.4)"
};

const valueHeaderStyles = {
    display: "flex",
    justifyContent: "space-between"
};

const iconStyles = {
    width: "30px",
    height: "auto"
};

export default Markets;
