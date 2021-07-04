const CheckHelper = {

    _aArrAux: [],
    _sInfected: "Infectado",
    _sHealthy: "Sano",
    _sImmune: "Inmune",

    testEval: function (aDna) {
        let aArrAux = [];
        aDna.forEach(sDna => {
            aArrAux.push(sDna.split(""));
        });
        this._aArrAux = aArrAux;

        let iCountH = 0, iCountV = 0, iCount = 0, iDepth = 4;
        for (let iV = 0; iV <= (aArrAux.length - iDepth); iV++) {
            for (let iH = 0; iH < aArrAux.length; iH++) {
                if (this.checkH(iH, iV, iDepth)) {
                    iCountH++;
                    iCount++;
                }
                if (this.checkV(iV, iH, iDepth)) {
                    iCountV++;
                    iCount++;
                }
            }
        }
        
        if (iCount < 2) {
            return this._sHealthy;
        } else if (iCount >= 2 && iCount < 4) {
            return this._sInfected;
        } else {
            return this._sImmune;
        }
    },

    checkH: function (iRow, iColumn, iDepth) {
        var sCheck = this._aArrAux[iRow][iColumn];
        for (var i = iColumn + 1; i < iColumn + iDepth; i++) {
            var sCompare = this._aArrAux[iRow][i];
            if (sCheck !== sCompare) {
                return false;
            }
        }
        return true;
    },

    checkV: function (iRow, iColumn, iDepth) {
        let sCheck = this._aArrAux[iRow][iColumn];
        for (let i = iRow + 1; i < iRow + iDepth; i++) {
            var sCompare = this._aArrAux[i][iColumn];
            if (sCheck !== sCompare) {
                return false;
            }
        }
        return true;
    }

};

module.exports = CheckHelper;