[![Build Status](https://travis-ci.org/enJames/WEConnect.svg)](https://travis-ci.org/enJames/WEConnect)
[![Coverage Status](https://coveralls.io/repos/github/enJames/WEConnect/badge.svg?branch=ft-user_login-156072448)](https://coveralls.io/github/enJames/WEConnect?branch=ch-Documentation-156080359)
[![Test Coverage](https://api.codeclimate.com/v1/badges/633507769038bd0e3ba0/test_coverage)](https://codeclimate.com/github/enJames/WEConnect/test_coverage)

# WEConnect
WEConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.

### Application Description

The platform allows two forms of users: authenticated and unauthenticated.

##### Authenticated Users
Authenticated users are users that signup and have user accounts. They can:
+ Login and Logout
+ Register/create a business
+ Search, view and review a business

##### Unauthenticated Users
Unauthenticated users do not have user accounts. They can:
+ Register/create a business
+ Search, view and review a business

# Live Template View
https://enjames.github.io/WEConnect/template/pages

# Group WEConnect Businesses

Resources related to businesses in the API.

## Action on WEConnect Collection [api/v1/businesses]

### List All Businesses [GET]
+ Response 200 (application/json)


##API Endpoints
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
