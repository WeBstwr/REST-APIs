- [Insomnia API Requests for Product Operations](#insomnia-api-requests-for-product-operations)
  - [Get All Products](#get-all-products)
    - [Steps:](#steps)
    - [Response:](#response)
  - [Get a Single Product](#get-a-single-product)
    - [Steps:](#steps-1)
    - [Response:](#response-1)
  - [Create a Product](#create-a-product)
    - [Steps:](#steps-2)
    - [Response:](#response-2)
  - [Update a Product](#update-a-product)
    - [Steps:](#steps-3)
    - [Response:](#response-3)
  - [Delete a Product](#delete-a-product)
    - [Steps:](#steps-4)
    - [Response:](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Insomnia API Requests for Product Operations

This is a collection of Insomnia API requests for performing various product operations.

## Get All Products

**Request Type:** GET  
**URL:** http://localhost:8080/products  
**Description:** Retrieve a list of all products from the database.

### Steps:

<ol>
<li>Open Insomnia.</li>
<li>Create a new request and name it "Get All Products".</li>
<li>Set the request method to <b>GET</b>.</li>
<li>Enter the URL: http://localhost:8080/products.</li>
<li>Click "Send".</li>
</ol>

### Response:

A JSON array of all products.

## Get a Single Product

**Request Type:** GET  
**URL:** http://localhost:8080/products/:id  
**Description:** Retrieve a single product from the database based on its ID.

### Steps:

<ol>
<li>Open Insomnia.</li>
<li>Create a new request and name it "Get One Product".</li>
<li>Set the request method to <b>GET</b>.</li>
<li>Enter the URL: http://localhost:8080/products/{id}(replace {id} with the actual product ID).</li>
<li>Click "Send".</li>
</ol>

### Response:

A JSON object of the requested product.

## Create a Product

**Request Type:** POST  
**URL:** http://localhost:8080/products  
**Description:** Create a new product and write it to the PostgreSQL database.

### Steps:

<ol>
<li>Open Insomnia.</li>
<li>Create a new request and name it "Create New Product".</li>
<li>Set the request method to <b>POST</b>.</li>
<li>Enter the URL: http://localhost:8080/products.</li>
<li>Go to the "Body" tab and select "JSON".</li>
<li>Enter the JSON object for the new product. Example:</li>  
{  
    
	"productthumbnail":"http://dummyimage.com/243x100.png/cc0000/ffffff",
		"producttitle": null,
		"productdescription": "cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
		"productcost": "$19.91",
		"onoffer": "true",
		"id": 301
}  
<li>Click "Send".</li>
</ol>

### Response:

A JSON object of the created product, including its new ID.

## Update a Product

**Request Type:** PUT  
**URL:** http://localhost:8080/products/:id  
**Description:** Update a product based on its ID.

### Steps:

<ol>
<li>Open Insomnia.</li>
<li>Create a new request and name it "Update Product".</li>
<li>Set the request method to <b>PUT</b>.</li>
<li>Enter the URL:  http://localhost:8080/products/{id} (replace {id} with the actual product ID).</li>
<li>Go to the "Body" tab and select "JSON".</li>
<li>Enter the JSON object with the updated product information. Example:</li>  
{

    "productthumbnail": "http://dummyimage.com/240x100.png/cc0000/ffffff78",
    "producttitle": "Coconutss - Shredded, Unsweet"

}

<li>Click "Send".</li>
</ol>

### Response:

A JSON object of the updated product.

## Delete a Product

**Request Type:** DELETE  
**URL:** http://localhost:8080/products/:id  
**Description:** Delete a product based on its ID.

### Steps:

<ol>
<li>Open Insomnia.</li>
<li>Create a new request and name it "Delete Product".</li>
<li>Set the request method to <b>DELETE</b>.</li>
<li>Enter the URL:  http://localhost:8080/products/{id} (replace {id} with the actual product ID).</li>
<li>Click "Send".</li>
</ol>

### Response:

A confirmation message indicating that the product was deleted.
