import React from 'react'

const ReportEdit = () =>
    <div>
        <div>
            <input type="text" placeholder="title"/>
            <button>Title</button>
        </div>

        <div>
            <input type="date" placeholder="start date"/>
            <button>Start Date</button>
        </div>

        <div>
            <input type="date" placeholder="end date"/>
            <button>End Date</button>
        </div>

        <form>
            <label>Reach:
                <input type="number" placeholder="number"/>
                <button>Ok</button>
            </label>
        </form>

        <form>
            <label>Views:
                <input type="number" placeholder="number"/>
                <button>Ok</button>
            </label>
        </form>
    </div>;


export default ReportEdit;