import React from 'react'

const ProductDetails = React.forwardRef<HTMLDivElement>((_, ref) => {
    return <h1 ref={ref}>ProductDetails</h1>
})

export default ProductDetails
