package com.example.stock.repository;

import com.example.stock.domain.OptimisticLockStock;
import com.example.stock.domain.Stock;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

public interface OptimisticLockStockRepository extends JpaRepository<OptimisticLockStock, Long> {

    @Lock(LockModeType.OPTIMISTIC)
    @Query("select s from OptimisticLockStock s where s.id = :id")
    OptimisticLockStock findByIdWithOptimisticLock(Long id);
}
