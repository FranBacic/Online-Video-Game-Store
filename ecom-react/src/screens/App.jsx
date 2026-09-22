import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../App.css'
import ProductList from '../components/ProductList'
import CategoryFilter from '../components/CategoryFilter'
import Navbar from '../components/Navbar'

function App() {

  const [searchParams] = useSearchParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("desc")

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))

    fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    const categoryId = searchParams.get('category')

    if (categoryId) {
      setSelectedCategory(Number(categoryId))
    } else {
      setSelectedCategory(null)
    }
  }, [searchParams])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSortChange = (event) => {
    setSortOrder(event.target.value)
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId ? Number(categoryId) : null)
  }

  const filteredProducts = products
    .filter(product => {
      return (
        (selectedCategory
          ? product.category.id === selectedCategory
          : true)
        &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })

  return (
    <div>

      < Navbar />


      {/* Page Header */}
      <section className="bg-light border-bottom">

        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2">
                OUR COLLECTION
              </span>

              <h1 className="display-5 fw-bold mb-3">
                Explore our products
              </h1>

              <p className="lead text-secondary mb-0">
                Discover quality products carefully selected for
                your everyday needs.
              </p>

            </div>

            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">

              <div className="product-count">
                <span className="display-6 fw-bold">
                  {filteredProducts.length}
                </span>

                <span className="text-secondary ms-2">
                  {filteredProducts.length === 1
                    ? 'product'
                    : 'products'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Filters */}
      <section className="container py-4">

        <div className="filter-box p-4 rounded-4 border bg-white shadow-sm">

          <div className="row g-3 align-items-end">

            {/* Category */}
            <div className="col-lg-3 col-md-6">

              <label className="form-label fw-semibold">
                Category
              </label>

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleCategorySelect}
              />

            </div>


            {/* Search */}
            <div className="col-lg-5 col-md-6">

              <label className="form-label fw-semibold">
                Search
              </label>

              <div className="input-group">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

              </div>

            </div>


            {/* Sort */}
            <div className="col-lg-4 col-md-12">

              <label className="form-label fw-semibold">
                Sort by
              </label>

              <select
                className="form-select"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="desc">
                  Price: High to Low
                </option>

                <option value="asc">
                  Price: Low to High
                </option>

              </select>

            </div>

          </div>

        </div>

      </section>


      {/* Products */}
      <main className="container pb-5">

        {filteredProducts.length > 0 ? (

          <>

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h2 className="h4 fw-bold mb-0">
                Products
              </h2>

              {searchTerm && (
                <span className="text-secondary">
                  Results for "{searchTerm}"
                </span>
              )}

            </div>

            <ProductList products={filteredProducts} />

          </>

        ) : (

          <div className="empty-products text-center py-5">

            <div className="empty-icon mb-3">
              🔍
            </div>

            <h3 className="fw-bold">
              No products found
            </h3>

            <p className="text-secondary">
              Try changing your search or category filter.
            </p>

            <button
              className="btn btn-outline-dark"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory(null)
              }}
            >
              Clear filters
            </button>

          </div>

        )}

      </main>


      {/* Footer */}
      <footer className="border-top py-4">

        <div className="container">

          <div className="d-flex flex-column flex-md-row
                          justify-content-between align-items-center">

            <span className="fw-bold fs-5">
              Shop<span className="text-primary">ly</span>
            </span>

            <span className="text-secondary">
              © 2026 Shoply. All rights reserved.
            </span>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App