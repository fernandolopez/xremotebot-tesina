DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))
EPS=$(patsubst %.dia,%.eps,$(wildcard *.dia))

all: $(DOCUMENTS) $(EPS)

%.pdf: %.svg
	inkscape --export-filename=$@ $<

%.eps: %.dia
	dia -e $@ $<

clean:
	rm -f $(DOCUMENTS) $(EPS)

.PHONY: clean all
