package com.ahrimy.guestbook.service;

import com.ahrimy.guestbook.dto.GuestbookDTO;
import com.ahrimy.guestbook.dto.PageRequestDTO;
import com.ahrimy.guestbook.dto.PageResultDTO;
import com.ahrimy.guestbook.entity.Guestbook;
import com.ahrimy.guestbook.entity.QGuestbook;
import com.ahrimy.guestbook.repository.GuestbookRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@Log4j2
@RequiredArgsConstructor
public class GuestbookServiceImpl implements GuestbookService {

    private final GuestbookRepository repository;

    @Override
    public PageResultDTO<GuestbookDTO, Guestbook> getList(PageRequestDTO requestDTO) {

        Pageable pageable = requestDTO.getPageable(Sort.by("gno").descending());
        BooleanBuilder booleanBuilder = getSearch(requestDTO);

        Page<Guestbook> result = repository.findAll(booleanBuilder, pageable);

        Function<Guestbook, GuestbookDTO> fn = (entity -> entityToDto(entity));

        return new PageResultDTO<>(result, fn);
    }

    private BooleanBuilder getSearch(PageRequestDTO requestDTO) {

        String type = requestDTO.getType();
        String keyword = requestDTO.getKeyword();

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QGuestbook qGuestbook = QGuestbook.guestbook;
        BooleanExpression expression = qGuestbook.gno.gt(0L);

        booleanBuilder.and(expression);

        if (type == null || type.trim().length() == 0) return booleanBuilder;

        BooleanBuilder conditionBuilder = new BooleanBuilder();

        if (type.contains("t")) conditionBuilder.or(qGuestbook.title.contains(keyword));
        if (type.contains("c")) conditionBuilder.or(qGuestbook.content.contains(keyword));
        if (type.contains("w")) conditionBuilder.or(qGuestbook.writer.contains(keyword));

        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;

    }
}
