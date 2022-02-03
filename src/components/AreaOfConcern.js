import React from 'react';

export default function AreaOfConcern() {
    return <div className="container">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Area Of Concern</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Scope for multi-deployment of a microservice scope increased. Forcasted date of completion Oct 2022</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Ratio Of PR merged vs opened has come down</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>10% more live issues</td>
                </tr>
            </tbody>
        </table>
    </div>;
}
