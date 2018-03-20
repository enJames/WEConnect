[![Build Status](https://travis-ci.org/enJames/WEConnect.svg)](https://travis-ci.org/enJames/WEConnect)
[![Coverage Status](https://coveralls.io/repos/github/enJames/WEConnect/badge.svg?branch=develop)](https://coveralls.io/github/enJames/WEConnect?branch=develop)
[![Test Coverage](https://api.codeclimate.com/v1/badges/633507769038bd0e3ba0/test_coverage)](https://codeclimate.com/github/enJames/WEConnect/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/633507769038bd0e3ba0/maintainability)](https://codeclimate.com/github/enJames/WEConnect/maintainability)

# WEConnect
WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.

#### Live Template View
https://enjames.github.io/WEConnect/template/pages

## WEConnect Businesses

Resources related to businesses in the API.

## Action on WEConnect

<h3>API ENDPOINTS</h3>
<hr>
<table>
    <thead>
        <tr>
            <th>Request</th>
            <th>End Point</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/v1/auth/signup</td>
            <td>Register a user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/v1/auth/signin</td>
            <td>Login user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/v1/businesses</td>
            <td>Register a business</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/v1/businesses/:businessId</td>
            <td>Update a business profile</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/v1/businesses/:businessId</td>
            <td>Delete a business</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/businesses/:businessId</td>
            <td>Get a business</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/businesses/</td>
            <td>Get all businesses</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/v1/businesses/:businessId/reviews</td>
            <td>Add a review to a business</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/businesses/:businessId/reviews</td>
            <td>Get all reviews for a business</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/v1/businesses?location=<location></td>
            <td>Get businesses with a location</td>
        </tr>
    </tbody>
</table>
