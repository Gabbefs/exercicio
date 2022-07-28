
function jumps (alturaBandeira, bigjumps) {

    if (1<= bigjumps <= 10^9 && 1 <= alturaBandeira <= 10^9) {
        if (bigjumps > alturaBandeira) {
            return alturaBandeira;
        }

        else if (alturaBandeira % bigjumps == 0 ) {
            return alturaBandeira/bigjumps;
        }

        else {
            numeroBigjump = math.floor(alturaBandeira/ bigjumps)
            numeroSaltosNormais = alturaBandeira-(numeroBigjump*bigjumps)
                return numeroBigjump+numeroSaltosNormais;
        }
    } else
        return -1
};




