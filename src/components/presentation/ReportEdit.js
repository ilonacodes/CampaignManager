import React from 'react'

const ReportEdit = () =>
    <div>
        <div>
            <input type="text" placeholder="title"/>
        </div>

        <div>
            <input type="date" placeholder="start date"/>
        </div>

        <div>
            <input type="date" placeholder="end date"/>
        </div>

        <form>
            <label>Reach:
                <input type="number" placeholder="number"/>
            </label>
        </form>

        <form>
            <label>Views:
                <input type="number" placeholder="number"/>
            </label>
        </form>
        <button>Submit</button>
    </div>;


export default ReportEdit;