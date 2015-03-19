DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))
DOCUMENTS+=$(patsubst %.dia,%.pdf,$(wildcard *.dia))

all: $(DOCUMENTS)

%.pdf: %.svg
	inkscape -z $< -A $@

%.svg: %.dia
	dia -e $@ $<

diagrama_myro.pdf: diagrama_myro.svg
	convert $< $@

clean:
	rm -f $(DOCUMENTS)

.PHONY: clean all
