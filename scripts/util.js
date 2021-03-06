function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

function subscribePush(registration) {
    // return getPublicKey().then(function(key) {
    //     return registration.pushManager.subscribe({
    //         userVisibleOnly: true,
    //         applicationServerKey: key
    //     });
    // });
    var key = getPublicKey();
    return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: key
    });
}

function getPublicKey() {
    // return fetch('./api/key')
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         return urlB64ToUint8Array('BBAQXM9gNxGSkaeYn4Tq27FTYdX8l52097mfettqHbiDd2fCmUwaiDoTFVScqJEljdU8K0PTGp9PeD3fW9eT2x8');
    //     });
    return urlB64ToUint8Array('BBAQXM9gNxGSkaeYn4Tq27FTYdX8l52097mfettqHbiDd2fCmUwaiDoTFVScqJEljdU8K0PTGp9PeD3fW9eT2x8');

}

// function publishSubscription(subscription, remove) {
// 	return fetch('./api/' + (remove ? 'un' : '') + 'subscribe', {
//         method: 'post',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             subscription: subscription
//         })
//     });
// }

// function saveSubscription(subscription) {
//     return publishSubscription(subscription);
// }

// function deleteSubscription(subscription) {
//     return publishSubscription(subscription, true);
// }
