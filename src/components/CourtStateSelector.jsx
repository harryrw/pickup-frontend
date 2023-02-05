import React from 'react'
import { Link } from 'react-router-dom'

const stateList = [
    { name: 'ACT', route: '/courts/state/act' },
    { name: 'NSW', route: '/courts/state/nsw' },
    { name: 'NT', route: '/courts/state/nt' },
    { name: 'QLD', route: '/courts/state/qld' },
    { name: 'SA', route: '/courts/state/sa' },
    { name: 'TAS', route: '/courts/state/tas' },
    { name: 'VIC', route: '/courts/state/vic' },
    { name: 'WA', route: '/courts/state/wa' }
  ]
  
  const CourtStateSelector = () => {
    return (
      <nav aria-label="State navigation for courts">
        <ul className="pagination flex-wrap" style={{}}>
          <li className="page-item">
            <Link to={`/courts`} className="page-link text-dark bg-warning border-secondary">
              All Courts
            </Link>
          </li>
          {stateList.map(state => (
            <li className="page-item" key={state.route}>
              <Link to={state.route} className="page-link text-dark bg-warning border-secondary">
                {state.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  export default CourtStateSelector