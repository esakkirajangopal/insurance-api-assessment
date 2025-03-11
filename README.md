# **Insurance API Assessment**

A **Node.js Express API** for fetching, searching, and filtering insurance policies.  
Built using **Express, TypeScript, and JSON file storage**.

## **Getting Started**

### **Install Dependencies**
```sh
npm install
```

### **run the server**
```sh
npm run start
```

This starts the API server at http://localhost:7000.


##  API Endpoint
### Get Policies (Search, Filter & Sort)


This single endpoint allows:
 - Fetching all policies
 - Searching by policy name (partial match)
 - Filtering by premium range, policy type, and coverage
 - Sorting policies by premium (ascending/descending)


``` https
GET /api/policies
```

### Query Parameters


| Param    | Description | Example |
| -------- | ----------- | ------- | 
| ```search_text```  | Search policies by name  | ```secure``` 
| ```policy_type``` | Filter by policy type (Health, Vehicle, Term Life)     | ```Health```
| ```min_coverage_amt```    | Minimum coverage amount filter    | ```400000```
| ```min_premium```    | Minimum premium filter    | ```2000```
| ```max_premium```    | Maximum premium filter    | ```4000```
| ```sort_order```    | Sort by order (asc or desc)    | ```asc```
| ```sort_key```    | Sort by field (id or premium)    | ```premium```


### Sample Request

``` https
GET /api/policies?search_text=secure&policy_type=Health&min_coverage_amt=400000
```

### Sample Response

```json
{
    "data": [
        {
            "id": 1,
            "name": "Secure Future Term Life",
            "type": "Term Life",
            "premium": 5000,
            "coverage": 1000000
        },
        {
            "id": 2,
            "name": "Health Shield Plan",
            "type": "Health",
            "premium": 3000,
            "coverage": 500000
        },
        {
            "id": 3,
            "name": "Car Protect Plan",
            "type": "Vehicle",
            "premium": 2000,
            "coverage": 300000
        }
    ]
}
```

