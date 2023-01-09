import classes from './Pizza.module.css'

const Pizza = ({ imageUrl, title, types, sizes, price, category, rating }) => {
    const typeNames =['тонкое','традиционное']
    

    return (
        <div className="">
            <div className={classes.pizza_container}>
                <img src={imageUrl} alt="pizza" className={classes.img_pizza} />
                <h4>{title}</h4>
                <div className={classes.pizza_info}>
                    <div className={classes.pizza_testo}>
                        {
                            types.map(type => <p className={classes.pizza_dough}>{typeNames[type]}</p>)
                        }
                    </div>
                    <div className={classes.pizza_size}>
                        {
                            sizes.map(size => <p key={size.id} className={classes.pizza_size_items}>{size} см</p>)
                        }
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza