DOCUMENTS=$(patsubst %.tex,%.pdf,$(wildcard *.tex))
HANDOUTS=$(patsubst %.tex,%_handout.pdf,$(wildcard *.tex))

all: $(DOCUMENTS) $(HANDOUTS)

%.pdf: %.tex generate_figures
	latexmk -pdf $<
	pdflatex $<

%_handout.pdf:
	true

generate_figures:
	make -C images
	make -C style

pdfonly: all
	rm -f *.nav *.out *.snm *.toc *.vrb *.aux *.bak *.log
	make -C handouts pdfonly

clean:
	make -C images clean
	make -C style clean
	make -C handouts clean
	rm -f *.nav *.out *.pdf *.snm *.toc *.vrb
reallyclean: clean
	rm -f *.aux *.bak *.log
	make -C handouts reallyclean

help:
	@echo ========================Targets============================
	@echo all: construye todo
	@echo pdfonly: compila y luego borra los archivos auxiliares
	@echo generate_figures: compila el contenido de images/ y style/
	@echo clean: elimina algunos archivos generados en la compilación
	@echo reallyclean: elimina todo salvo los fuentes

.PHONY: clean generate_figures help
