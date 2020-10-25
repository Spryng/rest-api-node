# Spryng NodeJS SDK

![npm version](https://img.shields.io/npm/v/spryng?color=green)

This is a NodeJS SDK for the Spryng SMS platform. The SDK makes it easy to implement the Spryng messaging system in your Node environment.

### Installation

The package can be installed from NPM using

```bash
yarn add spryng
```

or

```bash
npm i spryng
```

### Configuration

All the SDK needs is an API key. You can create an API key in your Spryng account settings:

- Log in to your account in [the Spryng dashboard](https://login.spryngsms.com/)
- Under 'My data', click on 'Profile'
- Scroll down to 'REST API keys' and generate a new API key

You can now initialize the SDK as follows:

```typescript
import { Spryng } from 'spryng'

const API_KEY = 'YourApiKey'

const spryng = new Spryng(API_KEY)
```

### Sending messages

Use the following code to send a message:

```typescript
import { Spryng } from 'spryng'

const API_KEY = 'YourApiKey'

const spryng = new Spryng(API_KEY)

const message = await spryng.message.send({
  encoding: 'auto',
  body: 'Test message',
  route: 'business',
  originator: 'Example Company',
  recipients: ['31612345678', '31687654321'],
  reference: 'ABC123'
})
```

### Listing Messages

It is possible to list messages that have been sent through the API:

```typescript
import { Spryng } from 'spryng'

const API_KEY = 'YourApiKey'

const spryng = new Spryng(API_KEY)

const message = await spryng.message.list({
  recipient_number: '31612345678'
}, ['recipients'])
```

#### List message response

The response object for listing messages mimics the API as follows:

`total`: Total number of results

`per_page`: Number of results per page

`current_page`: The current page that is fetched

`last_page`: The number of pages

`next_page_url`: Full URL of the next page GET endpoint

`prev_page_url`: Full URL of the previous page GET endpoint

`from`: From index in the total results

`to`: To index in the total results

`data`: Array of `Message` objects, the actual result data



#### List message filters

The first argument of the list method is an object of filters that can be specified to limit the results:

`originator`: String used as the originator property when sending the messages

`recipient_number`: The phone number of the recipient

`reference`: A reference that has optionally been specified when creating the message

`created_from`: Date range for when the message has been created

`created_until`: Date range for when the message has been created

`scheduled_from`: Date range when the message has been scheduled to be send

`scheduled_to`Date range when the messsage has been scheduled to be send

`status`: Send status of the message

### Fetching single message

Instead of listing, a single message can be fetched as well by its ID:

```typescript
import { Spryng } from 'spryng'

const API_KEY = 'YourApiKey'

const spryng = new Spryng(API_KEY)

const message = await spryng.message.show('91d95b85-b32f-42bd-a9fb-4cde0a56424x')
```

### Cancel a message

Scheduled messages can be canceled from being send:

```typescript
import { Spryng } from 'spryng'

const API_KEY = 'YourApiKey'

const spryng = new Spryng(API_KEY)

const message = await spryng.message.cancel('91d95b85-b32f-42bd-a9fb-4cde0a56424x')
```



