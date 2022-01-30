export default class UploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                // this._sendRequest(file);
            }));
    }

    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    // Initializes the XMLHttpRequest object using the URL passed to the constructor.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://localhost:8000/api/v1/uploader', true);
        xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmM2ZjI1MGEwN2VhOTNiNGI2MDc1YzkzM2ZlOTBmZjA2YjU3NThkNTY4ODA2NWQyOWQ0YzVmYjdiMzIwMmRiMThjZDIyMjdkZjk4MjJjNmIiLCJpYXQiOjE2NDMzODA5NzAuNjY1MjIzLCJuYmYiOjE2NDMzODA5NzAuNjY1MjI4LCJleHAiOjE2NDM1NTM3NzAuNDM0NjksInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.HFjSVggGmL9pIe_nT8EZBx3DSpX3eqd5UFOtwOGdhdoNO6GggvMgIS_OxlNlQGLVcqFP4nfeSP8Ao4VbJ6f3hmBCrOYzD2Po03al1WZ17kYTiZ6k6ioEv1n3lUKzHyAGCPhTmAU-hhLnqvdXH25Jxv4bNXYbJwZkOvzf8r7qpGZ3yMR56OOdG1eFH4qCTAmMFbs_sU1zdUJ9MOKnQ9s8Kbet1UwMvxYAB1lruicb_hQ87LlaBQbF8myUIWN4Xw0vKH-I4eIbLX1UgiBjPNGVMUfdZYz625llYuv93T5A7JdSfellbUqF9SWXXM59BbDUp0gwFXZw7-mhgJAeKuKdInJ8M-hwLu5_IkUm6cM5LFndxWqeO0ikLoWf19Qrmqbbz9Dt4LLqEMtAwmiL8UIZDTyWoNk97YPEpv-w71Dmb-7E4pZ8y94iENoMoZwFfbVOQpC59OTj4pZ6RjdFqOLF0zl3lpBqw3fV-mEvzJEFYtxbmVO-jaRRZIZk039_02-vs2h22z4eVVSdCUETFSB0rP8rfTrc73DYT18Eq5OHDLq53qUkDFiVPIB0pfXRt2WuhUEXPzxxTBxYB8_qljTr7qMYKD1rhI05D0gA0jv8T5wwcN3-oe0fwdBRmDfGZPBkyZdkiMdiTq6RlUzhabLHkksW_XP9TmZ97aexsB5XgeI');
        xhr.responseType = 'json';
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            resolve({
                default: response.url
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    // Prepares the data and sends the request.
    _sendRequest(file) {
        // Prepare the form data.
        const data = new FormData();

        data.append('upload', file);

        // Send the request.
        this.xhr.send(data);
    }
}