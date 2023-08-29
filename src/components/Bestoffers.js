const BestoffersComponent = (props) =>{
    const{bestofferData} = props;
    console.log(bestofferData)
    return(
        <div className="card">
            <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/"+ bestofferData.cloudinaryImageId}/>
        </div>
     
    )
}

export default BestoffersComponent;