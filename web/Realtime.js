class RealtimeChange {
    constructor(id) {
        this.id = id;
        this.initializeKeyups();
    }
    initializeKeyups() {
    }
    retEle(arr) {
        var ls = [];
        var iter;
        for (var i = 0; i < arr.length; i++) {
            iter = pak(arr[i].toString(), this.id);
            if (!!iter) ls.push(iter);
        }
        return (ls.length > 0) ? ls : false;
    }
}
function pak(pre, id) {
    return $(`#${pre + id}`);
}
function srbol(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].text) return false;
    }
    return true;
}
class RTData extends RealtimeChange {
    initializeKeyups() {
        //implament checkboxes
        $(`#preCalibration${this.id}`).keyup( () => {
            var sender = $(`#preCalibration${this.id}`);
            let preRequisitsToExec = [
                'postCalibration',
                'startTime',
                'endTime'
            ];
            if (!srbol(this.retEle(preRequisitsToExec))) { console.log('nono') } else { console.log('goodgood') }

            //$(`#`).text($(this).val());
        });
    }
}
class RTHeadData extends RealtimeChange {

}