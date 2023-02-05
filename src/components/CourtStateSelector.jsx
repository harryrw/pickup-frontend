import React from 'react'
import { Link } from 'react-router-dom'


const CourtStateSelector = () => {
    return (
        <nav aria-label="State navigation for courts">
            <ul className="pagination flex-wrap" style={{}}>
                <li class="page-item"><Link to={`/courts`} className="page-link text-dark bg-warning border-secondary" >All Courts</Link></li>
                <li class="page-item bg-warning"><Link to={`/courts/state/act`} className="page-link text-dark bg-warning border-secondary" >ACT</Link></li>
                <li class="page-item"><Link to={`/courts/state/nsw`} className="page-link text-dark bg-warning border-secondary" >NSW</Link></li>
                <li class="page-item"><Link to={`/courts/state/nt`} className="page-link text-dark bg-warning border-secondary" >NT</Link></li>
                <li class="page-item"><Link to={`/courts/state/qld`} className="page-link text-dark bg-warning border-secondary" >QLD</Link></li>
                <li class="page-item"><Link to={`/courts/state/sa`} className="page-link text-dark bg-warning border-secondary" >SA</Link></li>
                <li class="page-item"><Link to={`/courts/state/tas`} className="page-link text-dark bg-warning border-secondary" >TAS</Link></li>
                <li class="page-item"><Link to={`/courts/state/vic`} className="page-link text-dark bg-warning border-secondary" >VIC</Link></li>
                <li class="page-item"><Link to={`/courts/state/wa`} className="page-link text-dark bg-warning border-secondary" >WA</Link></li>
            </ul>
        </nav>
    )
    }

export default CourtStateSelector