class RestFetcher {

  config = null

  constructor(config, defaultHeaders = null) {
    this.config = config

    if (!defaultHeaders) {
      this.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    } else {
      this.headers = defaultHeaders
    }
  }

  getData() {
    return fetch(this.config.urls.get, {
      method: this.config.urls.getMethod || 'GET',
      headers: this.headers,
    }).then((resp) => {
      return resp.json()
    })
  }

  createData(data) {
    return fetch(this.config.urls.create, {
      method: this.config.urls.createMethod || 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((resp) => {
      return resp.json()
    })
  }

  updateData(data) {
    return fetch(this.config.urls.update, {
      method: this.config.urls.updateMethod || 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((resp) => {
      return resp.json()
    })
  }

}

export default RestFetcher